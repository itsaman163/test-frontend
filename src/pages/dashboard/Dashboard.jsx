import { Table } from "antd";
import { useEffect, useState } from "react";
import { columns } from "./table-columns";
import apiRequest from "../../libraries/axios";

const Dashboard = () => {
	const [data, setData] = useState([]);
	const getData = async () => {
		try {
			const apiParams = {};
			const apiRes = await apiRequest("user_list", apiParams);
			if (apiRes?.settings?.success) {
				setData(apiRes?.data);
			}
		} catch (error) {
		} finally {
		}
	}
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="dashboard">
			<Table
				size="small"
				columns={columns()}
				dataSource={data}
				rowKey={"unique_id"}
				pagination={{ pageSize: 5 }}
				rowSelection={true}
			/>
		</div>
	)
}
export default Dashboard;