import React, { useState, useEffect } from 'react'
import { Card, Table, Button, message, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex'
import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from 'configs/FirebaseConfig';
import utils from 'utils'
 

const SummSyssubDetailList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState()
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const documents = await FirestoreService.getDocuments('sumSysSub');
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
	
	const addDoceng = () => {
		navigate(`/app/apps/general-input/systemsub-drawing/systemsub-drawing-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/apps/general-input/systemsub-drawing/systemsub-drawing-edit/${row.id}`)
	}
	
	const deleteRow = async (row) => {
		Modal.confirm({
		  title: 'Apakah anda yakin ingin menghapus dokumen ini ?',
		  content: 'data yang dihapus tidak dapat dikembalikan',
		  onOk: async () => {
			try {
			  // Delete the document from Firestore
			  await deleteDoc(doc(db, 'sumSysSub', row.id));
	  
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
			title: 'No',
			width: 15,
			dataIndex: 'name',
			key: 'name',
			// fixed: 'left',
		  },

		  {
			title: 'Piping',
			children: [
			  {
				title: 'Line Number',
				dataIndex: 'pipingLineNo',
				key: 'pipingLineNo',
				width: 50,
			  }
			],
		  },

		  {
			title: 'Equipments',
			alignItems: 'center',
			children: [
			  {
				title: 'Static Equipment',
				dataIndex: 'equipmentStatic',
				key: 'equipmentStatic',
				width: 30,
			  },
			  {
				title: 'Rotary Equipment',
				dataIndex: 'equipmentRotary',
				key: 'equipmentRotary',
				width: 30,
			  },
			  {
				title: 'Package Equipment',
				dataIndex: 'equipmentPackage',
				key: 'equipmentPackage',
				width: 30,
			  }
			],
		  },

		  {
			title: 'Instrument',
			children: [
			  {
				title: 'Tag Number',
				dataIndex: 'instrumentTagNo',
				key: 'instrumentTagNo',
				width: 50,
			  }
			],
		  },

		  {
			title: 'Electrical',
			children: [
			  {
				title: 'Eq & Motor No',
				dataIndex: 'elecEq',
				key: 'elecEq',
				width: 50,
			  },
			  {
				title: 'Cable No',
				dataIndex: 'elecCableNo',
				key: 'elecCableNo',
				width: 50,
			  }
			],
		  },

		{
			title: '',
			key: 'operation',
   			fixed: 'right',
			dataIndex: 'actions',
			width: 10,
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
					<Button onClick={addDoceng} type="primary" icon={<PlusCircleOutlined />} block>Add System/SubSystem Drawing</Button>
				</div>
			</Flex>
			<div className="table-responsive">
			<Table
				columns={tableColumns}
				dataSource={list}
				bordered
				size="middle"
				scroll={{ x: 'calc(700px + 50%)', y: 240 }}
				rowKey='id' 
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
			/>,
			</div>
		</Card>
	)
}

export default SummSyssubDetailList
