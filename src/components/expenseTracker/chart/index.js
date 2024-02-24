import Chart from "react-apexcharts";

const options = {
  labels: ["Income", "Expense"],
  colors: ["#213ebf", "#FD5E53"],
  chart: {
    width: "100px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#213ebf", "#FD5E53"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

const TransactionChartSummary = ({ expense = 0, income = 0 }) => {
  const hasData = expense !== 0 || income !== 0;

  return (
    <>
      {hasData ? (
        <Chart
          options={options}
          series={[income, expense]}
          type="pie"
          width={"150%"}
          height={"150%"}
        />
      ) : (
        <div style={{ backgroundColor: "blue", width: "100%", height: "100%" }}>
          
        </div>
      )}
    </>
  );
};

export default TransactionChartSummary;
