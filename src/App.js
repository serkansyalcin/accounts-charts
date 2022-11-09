import axios from "axios";
import { useState, useEffect } from "react";
import PieChart from "./components/PieChart";
import PieChart3D from "./components/PieChart3D";
import DonutChart from "./components/DonutChart";

const types = ["clicks", "spend", "impressions"];

const App = () => {
  const [data, setData] = useState("");
  const [account, setAccount] = useState(0);
  const [type, setType] = useState(0);

  const getData = async () => {
    try {
      await axios
        .get("https://api.wask.co/demo/myaccounts", {
          headers: {
            Token: "2zcgJnjDyb",
          },
        })
        .then((res) => {
          setData(res.data.accounts);
        });
    } catch {
      console.log("Something wrong!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>Statistics</h1>
      {data && (
        <select defaultValue="0" onChange={(e) => setAccount(e.target.value)}>
          {data?.map((item, i) => (
            <option key={item.id} value={i}>
              {item.name}
            </option>
          ))}
        </select>
      )}
      {data && (
        <select defaultValue="0" onChange={(e) => setType(e.target.value)}>
          {types?.map((item, i) => (
            <option key={i} value={i}>
              {item}
            </option>
          ))}
        </select>
      )}
      {data && type == 0 && (
        <PieChart
          data={[
            ["Task", "Hours per Day"],
            ...data[account].insights.data.map((item) => [
              item.date_start + " - " + item.date_end,
              Number(item[types[type]]),
            ]),
          ]}
        />
      )}
      {data && type == 1 && (
        <PieChart3D
          data={[
            ["Task", "Hours per Day"],
            ...data[account].insights.data.map((item) => [
              item.date_start + " - " + item.date_end,
              Number(item[types[type]]),
            ]),
          ]}
        />
      )}
      {data && type == 2 && (
        <DonutChart
          data={[
            ["Task", "Hours per Day"],
            ...data[account].insights.data.map((item) => [
              item.date_start + " - " + item.date_end,
              Number(item[types[type]]),
            ]),
          ]}
        />
      )}
    </div>
  );
};

export default App;
