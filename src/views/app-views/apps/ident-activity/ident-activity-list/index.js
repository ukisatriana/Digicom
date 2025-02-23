import React, { useState, useEffect } from 'react'
import { Card, Table, Button, message, Modal } from 'antd';
import { EyeOutlined , DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex'
import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from 'configs/FirebaseConfig';
import utils from 'utils'
 

const IdentActivityList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState()
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const documents = await FirestoreService.getDocuments('identActivity');
				setList(documents);
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
                    <EyeOutlined  />
                    <span className="ml-2">Edit & View Detail</span>
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
	
	const addDoceng = () => {
		navigate(`/app/apps/ident-activity/ident-activity-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/apps/ident-activity/ident-activity-edit/${row.id}`)
	}
	
	const deleteRow = async (row) => {
		Modal.confirm({
		  title: 'Apakah anda yakin ingin menghapus dokumen ini ?',
		  content: 'data yang dihapus tidak dapat dikembalikan',
		  onOk: async () => {
			try {
			  // Delete the document from Firestore
			  await deleteDoc(doc(db, 'identActivity', row.id));
	  
			  // Update the local list
			  const objKey = 'id';
			  let data = list;
			  if (selectedRows.length > 1) {
				selectedRows.forEach((elm) => {
				  data = utils.deleteArrayRow(data, objKey, elm.id);
				});
				setSelectedRows([]);
			  } else {
				data = utils.deleteArrayRow(data, objKey, row.id);
			  }
			  setList(data);
	  
			  message.success('Document deleted successfully.');
			} catch (error) {
			  message.error(`Error deleting document: ${error.message}`);
			}
		  },
		  onCancel: () => {
			message.info('Deletion cancelled.');
		  },
		});
	  };

	const tableColumns = [
		{
			title: 'ID',
			dataIndex: 'id',
			render: (text, record, index) => index + 1

		},
		{
			title: 'System Name',
			dataIndex: 'commSysDeffName',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'commSysDeffName')
		},
		{
			title: 'System Number',
			dataIndex: 'commSysDeffNo',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'commSysDeffNo')
		},
        {
			title: 'Sub System Name',
			dataIndex: 'commSysDeffSubName',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'commSysDeffSubName')
		},
		{
			title: 'Sub System Number',
			dataIndex: 'commSysDeffSubNo',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'commSysDeffSubNo')
		},
		{
			title: 'Document Reference',
			dataIndex: 'documentReference',

			render: (url) => (
				<a href={url} target="_blank" rel="noopener noreferrer" download>
				  View File
				</a>
			  ),
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'documentReference')
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
	// 	const searchArray = e.currentTarget.value? list : ProductListData
	// 	const data = utils.wildCardSearch(searchArray, value)
	// 	setList(data)
	// 	setSelectedRowKeys([])
	// } 

	return (
		<Card>
			<Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					<div className="mr-md-3 mb-3">
						{/* <Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/> */}
					</div>
				</Flex>
				<div>
					<Button onClick={addDoceng} type="primary" icon={<PlusCircleOutlined />} block>Add Identification List</Button>
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

export default IdentActivityList
