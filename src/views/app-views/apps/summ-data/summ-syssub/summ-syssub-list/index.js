import React, { useState, useEffect } from 'react'
import { Card, Table, Button, message, Modal } from 'antd';
import { EyeOutlined , DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex'
import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
import utils from 'utils'
 
const { confirm } = Modal;

const SummSyssubList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState()
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const documents = await FirestoreService.getDocuments('sumSysSub');
				setList(documents);
				// console.log('asd', documents)
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
	
	const addSummSyssub = () => {
		navigate(`/app/apps/summ-data/summ-syssub/summ-syssub-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/apps/summ-data/summ-syssub/summ-syssub-edit/${row.id}`)
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
			  await FirestoreService.deleteDocument('sumSysSub', row.id);
			  message.success('Data deleted successfully');
			  setList((prevList) => prevList.filter((item) => item.id !== row.id));
			} catch (error) {
			  message.error('Error deleting Data: ' + error.message);
			}
		  },
		  onCancel() {
			console.log('Delete action canceled');
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
					<Button onClick={addSummSyssub} type="primary" icon={<PlusCircleOutlined />} block>Add System/SubSystem Drawing</Button>
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

export default SummSyssubList
