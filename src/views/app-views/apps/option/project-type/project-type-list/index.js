import React, {useEffect, useState} from 'react'
import { Card, Table, Button, message, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex';
import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
import utils from 'utils'

const { confirm } = Modal;

const ProjectTypeList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState()
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const documents = await FirestoreService.getDocuments('projectType');
				setList(documents);
			} catch (error) {
				console.log('Error fetching documents: ', error.message);
			}
		};
		fetchData();
	}
	, []);

	// const dropdownMenu = row => (
	// 	<Menu>
	// 		<Menu.Item onClick={() => viewDetails(row)}>
	// 			<Flex alignItems="center">
	// 				<EditOutlined />
	// 				<span className="ml-2">Edit</span>
	// 			</Flex>
	// 		</Menu.Item>
	// 		<Menu.Item onClick={() => deleteRow(row)}>
	// 			<Flex alignItems="center">
	// 				<DeleteOutlined />
	// 				<span className="ml-2">{selectedRows.length > 0 ? `Delete (${selectedRows.length})` : 'Delete'}</span>
	// 			</Flex>
	// 		</Menu.Item>
	// 	</Menu>
	// );

    const dropdownMenu = (row) => [
      {
        key: "edit",
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
		navigate(`/app/apps/option/project-type/project-type-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/apps/option/project-type/project-type-edit/${row.id}`)
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
			  await FirestoreService.deleteDocument('projectType', row.id);
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
		// {
		// 	title: 'ID',
		// 	dataIndex: 'id'
		// },
		{
			title: 'ID',
			dataIndex: 'id',
			render: (text, record, index) => index + 1

		},
		{
			title: 'Project Type Name',
			dataIndex: 'projectTypeName',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'projectTypeName')
		},
		{
			title: 'Project Type Keterangan',
			dataIndex: 'projectTypeKet',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'projectTypeKet')
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<EllipsisDropdown menu={dropdownMenu(elm)}/>
				</div>
			)
		}
	];
	
	const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		}
	};

	// const onSearch = e => {
	// 	const value = e.currentTarget.value
	// 	const searchArray = e.currentTarget.value? list : projectData
	// 	const data = utils.wildCardSearch(searchArray, value)
	// 	setList(data)
	// 	setSelectedRowKeys([])
	// }


	return (
		<Card>
			<Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					{/* <div className="mr-md-3 mb-3">
						<Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
					</div> */}
					
				</Flex>
				<div>
					<Button onClick={addProjectDivisi} type="primary" icon={<PlusCircleOutlined />} block>Add Project Type</Button>
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

export default ProjectTypeList
