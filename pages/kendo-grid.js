import { useRef, useState } from 'react';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { filterBy } from '@progress/kendo-data-query';
import { McButton } from '@moxiworks/mds-alpha/react';
import { sampleProducts } from '../helpers/kendoProducts';

const initialFilter = {
  logic: 'and',
  filters: [
    {
      field: 'ProductName',
      operator: 'contains',
      value: 'Chef',
    },
  ],
};

export default function KendoGrid() {
  const [filter, setFilter] = useState(initialFilter);
  const _export = useRef(null);
  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }
  };
  return (
    <>
      <h2 className='my-24'>Kendo Table Grid</h2>
      <ExcelExport data={sampleProducts} ref={_export}>
        <Grid
          data={filterBy(sampleProducts, filter)}
          filterable={true}
          filter={filter}
          onFilterChange={(e) => setFilter(e.filter)}
        >
          <GridToolbar>
            <McButton title='Export Excel' onClick={excelExport}>
              Export to Excel
            </McButton>
          </GridToolbar>
          <GridColumn
            field='ProductID'
            title='ID'
            filterable={false}
            width='60px'
          />
          <GridColumn field='ProductName' title='Product Name' width='240px' />
          <GridColumn
            field='FirstOrderedOn'
            width='240px'
            filter='date'
            format='{0:d}'
          />
          <GridColumn
            field='UnitPrice'
            width='180px'
            filter='numeric'
            format='{0:c}'
          />
          <GridColumn field='Discontinued' width='190px' filter='boolean' />
        </Grid>
      </ExcelExport>
    </>
  );
}
