import { makeStyles } from "@mui/styles";
import { Form } from "./components/Form";
import DataTable from "./components/DataTable";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
  },
});

export const App = () => {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.header}>GitHub files finder</h1>
      <Form />
      <DataTable />
    </>
  );
};

export default App;
