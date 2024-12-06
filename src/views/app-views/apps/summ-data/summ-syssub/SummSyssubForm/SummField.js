import React, { useState, useEffect } from 'react'
import { Card, Table, message, Descriptions } from 'antd';
import Flex from 'components/shared-components/Flex'
import FirestoreService from 'services/FirestoreService';
 

const SummField = ({selectedId}) => {
	const [list, setList] = useState()
  const [data, setData] = useState(null); // Data utama
  const [loading, setLoading] = useState(true);
	// const [selectedRows, setSelectedRows] = useState([])
	// const [selectedRowKeys, setSelectedRowKeys] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          if (!selectedId) return; // Jika tidak ada ID, hentikan
          try {
            setLoading(true);
            const document = await FirestoreService.getDocument('sumSysSub', selectedId);
            setData(document); // Simpan data utama
            setList(document?.summSub || []); // Simpan array summSub
          } catch (error) {
            message.error(`Error fetching data: ${error.message}`);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, [selectedId]);
    
      if (loading) return <p>Loading...</p>;
      if (!data) return <p>No data found</p>;

	// const dropdownMenu = row => [
  //       {
  //           key: 'edit',
  //           label: (
  //               <Flex alignItems="center" onClick={() => viewDetails(row)}>
  //                   <EditOutlined />
  //                   <span className="ml-2">Edit</span>
  //               </Flex>
  //           ),
  //       },
  //     {
  //       key: "delete",
  //       label: (
  //         <Flex alignItems="center" onClick={() => deleteRow(row)}>
  //           <DeleteOutlined />
  //           <span className="ml-2">
  //             {selectedRows.length > 0
  //               ? `Delete (${selectedRows.length})`
  //               : "Delete"}
  //           </span>
  //         </Flex>
  //       ),
  //     },
  //   ];
	
	
	
	// const viewDetails = row => {
	// 	navigate(`/app/apps/general-input/systemsub-drawing/systemsub-drawing-edit/${row.id}`)
	// }
	
	// const deleteRow = async (row) => {
  //       confirm({
  //         title: 'Are you sure you want to delete this data?',
  //         content: 'This action cannot be undone.',
  //         okText: 'Yes, delete it',
  //         okType: 'danger',
  //         cancelText: 'No, cancel',
  //         onOk: async () => {
  //           try {
  //             if (!row || !row.id) {
  //               message.error('Invalid data selected for deletion.');
  //               return;
  //             }
      
  //             // Hapus item yang sesuai dari array lokal
  //             const updatedList = list.filter((item) => item.id !== row.id);
      
  //             // Update array di Firestore
  //             await FirestoreService.updateDocument('sumSysSub', selectedId, {
  //               summSub: updatedList,
  //             });
      
  //             // Perbarui state lokal
  //             setList(updatedList);
      
  //             message.success('Data deleted successfully');
  //           } catch (error) {
  //             message.error('Error deleting data: ' + error.message);
  //           }
  //         },
  //         onCancel() {
  //           console.log('Delete action canceled');
  //         },
  //       });
  //     };





	const tableColumns = [
		{
			title: 'No',
			width: 10,
			key: 'name',
			dataIndex: 'id',
			render: (text, record, index) => index + 1

		  },

		  {
			title: 'Piping',
            dataSource: 'piping',
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
				dataIndex: 'instTagNo',
				key: 'instTagNo',
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
				width: 40,
			  },
			  {
				title: 'Cable No',
				dataIndex: 'elecCableNo',
				key: 'elecCableNo',
				width: 40,
			  }
			],
		  },

		// {
		// 	title: '',
		// 	key: 'operation',
   		// 	fixed: 'right',
		// 	dataIndex: 'actions',
		// 	width: 10,
		// 	render: (_, elm) => (
		// 		<div className="text-right">
		// 			<EllipsisDropdown menu={dropdownMenu(elm)}/>
		// 		</div>
		// 	)
		// }
	];
	
	// const rowSelection = {
	// 	onChange: (key, rows) => {
	// 		setSelectedRows(rows)
	// 		setSelectedRowKeys(key)
	// 	}
	// };

	return (
    <Card>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mobileFlex={false}
      >
        <Flex className="mb-1" mobileFlex={false}>
          <div className="mr-md-3 mb-3">
          
          </div>
        </Flex>
       
      </Flex>

      <div>
            <Descriptions
              title="Summary List of System / Subsystem"
              bordered
              column={{ xxl: 3, xl: 4, lg: 2, md: 2, sm: 1, xs: 1 }}
            >
        <Descriptions.Item label="System Name">{data.commSysDeffName || 'N/A'}</Descriptions.Item>
        <Descriptions.Item label="System No">{data.commSysDeffNo || 'N/A'}</Descriptions.Item>
        <Descriptions.Item label="Sub-System Name">{data.commSysDeffSubName || 'N/A'}</Descriptions.Item>
        <Descriptions.Item label="Sub-System No">{data.commSysDeffSubNo || 'N/A'}</Descriptions.Item>
            </Descriptions>
          
      </div>

      <br />
      <div className="table-responsive">
        <Table
          columns={tableColumns}
          dataSource={list}
          bordered
          size="middle"
          scroll={{ x: "calc(700px + 50%)", y: 240 }}
        />
        ,
      </div>
    </Card>
  );
}

export default SummField
