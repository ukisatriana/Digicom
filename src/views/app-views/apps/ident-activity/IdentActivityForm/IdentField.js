import React, { useState, useEffect } from 'react'
import { Card, Table, message, Descriptions } from 'antd';
import Flex from 'components/shared-components/Flex'
// import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
 

const IdentField = ({selectedId}) => {
	// const navigate = useNavigate();
	const [list, setList] = useState()
    const [data, setData] = useState(null); // Data utama
	// const [selectedRows, setSelectedRows] = useState([])
	// const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          if (!selectedId) return; // Jika tidak ada ID, hentikan
          try {
            setLoading(true);
            const document = await FirestoreService.getDocument('identActivity', selectedId);
            setData(document); // Simpan data utama
            setList(document?.identActivitySub || []); // Simpan array summSub
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
	
	
	const tableColumns = [
    {
      title: "No",
      width: 10,
      key: "name",
      dataIndex: "id",
      render: (text, record, index) => index + 1,
    },

    {
      title: "Tag Number",
      dataIndex: "tagNo",
      key: "tagNo",
      width: 50,
    },
    {
      title: "Item Description",
      dataIndex: "itemDesc",
      key: "itemDesc",
      width: 50,
    },
    {
      title: "Commisioning Activities",
      dataIndex: "commActivities",
      key: "commActivities",
      width: 50,
    },
    {
      title: "Specific Procedure Required",
      dataIndex: "specProcedurReq",
      key: "specProcedurReq",
      width: 50,
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

export default IdentField
