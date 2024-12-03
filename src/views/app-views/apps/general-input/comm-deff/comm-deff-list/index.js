import React, {useEffect, useState} from 'react'
import { Card, Table, Button, message, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex';
import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
import utils from 'utils'

const { confirm } = Modal;

const CommDeffList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState()
	// console.log('list',list)	
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const documents = await FirestoreService.getDocuments('commSysDeff');
				setList(documents);
                console.log ('data',documents)
			} catch (error) {
				console.log('Error fetching documents: ', error.message);
			}
		};
		fetchData();
	}
	, []);

	const dropdownMenu = row => [
        {
            key: 'edit',
            label: (
                <Flex alignItems="center" onClick={() => viewDetails(row)}>
                    <EditOutlined />
                    <span className="ml-2">Edit</span>
                </Flex>
            ),
        },
      {
        key: "delete",
        label: (
          <Flex alignItems="center" onClick={() => deleteRow(row)}>
            <DeleteOutlined />
            <span className="ml-2">
              {selectedRows.length > 0
                ? `Delete (${selectedRows.length})`
                : "Delete"}
            </span>
          </Flex>
        ),
      },
    ];
	
	const addProjectDivisi = () => {
		navigate(`/app/apps/general-input/comm-deff/comm-deff-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/apps/general-input/comm-deff/comm-deff-edit/${row.id}`)
	}
	
	const deleteRow = async (row) => {
		confirm({
		  title: 'Are you sure you want to delete this data?',
		  content: 'This action cannot be undone.',
		  okText: 'Yes, delete it',
		  okType: 'danger',
		  cancelText: 'No, cancel',
		  onOk: async () => {
			try {
			  await FirestoreService.deleteDocument('commSysDeff', row.id);
			  message.success('Project deleted successfully');
			  setList((prevList) => prevList.filter((item) => item.id !== row.id));
			} catch (error) {
			  message.error('Error deleting Project: ' + error.message);
			}
		  },
		  onCancel() {
			console.log('Delete action canceled');
		  },
		});
	  };

	const tableColumns = [
		{
			title: "ID",
			dataIndex: "id",
			align: "center",
			render: (text, record, index) => (
			  <span style={{ fontWeight: "bold" }}>{index + 1}</span>
			),
		  },
		  {
			title: "Comm System Deff No",
			dataIndex: "commSysDeffNo",
			sorter: (a, b) => utils.antdTableSorter(a, b, "commSysDeffNo"),
			// render: (text) => (
			//   <span style={{ color: "#007bff", fontWeight: "bold" }}>{text}</span>
			// ),
		  },
		  {
			title: "Comm System Deff Name",
			dataIndex: "commSysDeffName",
			sorter: (a, b) => utils.antdTableSorter(a, b, "commSysDeffName"),
			// render: (text) => <span style={{ fontStyle: "italic" }}>{text}</span>,
		  },
		{
			title: "Comm SubSystem Deff",
			dataIndex: "commSysDeffSub",
			render: (sub) =>
			  Array.isArray(sub) && sub.length > 0 ? (
				<ul
				  style={{
					margin: 0,
					padding: 0,
					listStyle: "none",
					background: "#f9f9f9",
					border: "1px solid #e8e8e8",
					borderRadius: "8px",
					padding: "8px",
				  }}
				>
				  {sub.map((item, index) => (
					<li
					  key={index}
					  style={{
						marginBottom: "8px",
						padding: "6px",
						borderBottom: index !== sub.length - 1 ? "1px dashed #d9d9d9" : "none",
					  }}
					>
					  <div style={{ marginBottom: "4px" }}>
						<span style={{ fontWeight: "bold", color: "#555" }}>No Subsystem :</span>{" "}
						<span style={{ color: "#1890ff" }}>{item.commSysDeffSubNo}</span>
					  </div>
					  <div>
						<span style={{ fontWeight: "bold", color: "#555" }}>Name Subsystem :</span>{" "}
						<span style={{ color: "#1890ff" }}>{item.commSysDeffSubName}</span>
					  </div>
					</li>
				  ))}
				</ul>
			  ) : (
				<span style={{ color: "#ccc" }}>No Data</span>
			  ),
		  },
		  {
			title: "Actions",
			dataIndex: "actions",
			render: (_, elm) => (
			  <div className="text-right">
				<EllipsisDropdown menu={dropdownMenu(elm)} />
			  </div>
			),
		  },
  ];
	
	const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		}
	};


	return (
		<Card>
			<Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					
				</Flex>
				<div>
					<Button onClick={addProjectDivisi} type="primary" icon={<PlusCircleOutlined />} block>Add Comm Deff List</Button>
				</div>
			</Flex>
			<div className="table-responsive">
				<Table 
					columns={tableColumns} 
					dataSource={list} 
					rowKey='id' 
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
				/>
			</div>
		</Card>
	)
}

export default CommDeffList
