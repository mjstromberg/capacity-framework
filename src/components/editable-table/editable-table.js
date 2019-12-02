import React, { useState } from "react";
import PropTypes from "prop-types";
import MaterialTable from "material-table";
import icons from "./icons";

const OPTIONS = {
  padding: "dense",
  paging: false,
  search: false,
  showFirstLastPageButtons: false
};
const containerStyle = { padding: 10 };

export default function EditableTable({
  initialColumns,
  initialData,
  onChange,
  title
}) {
  const [columns] = useState(initialColumns, [initialColumns]);
  const [data, setData] = useState(initialData, [initialData]);

  return (
    <MaterialTable
      columns={columns}
      data={data}
      icons={icons}
      options={OPTIONS}
      style={containerStyle}
      title={title}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              const updatedData = [...data, newData];
              resolve();
              setData(updatedData);
              onChange(updatedData);
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                const updatedData = [...data];
                updatedData[updatedData.indexOf(oldData)] = newData;
                setData(updatedData);
                onChange(updatedData);
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              const updatedData = [...data];
              updatedData.splice(updatedData.indexOf(oldData), 1);
              resolve();
              setData(updatedData);
              onChange(updatedData);
            }, 600);
          })
      }}
    />
  );
}

EditableTable.propTypes = {
  initialColumns: PropTypes.array.isRequired,
  initialData: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  title: PropTypes.string.isRequired
};

EditableTable.defaultProps = {
  onChange: () => {}
};
