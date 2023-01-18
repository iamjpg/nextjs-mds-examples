import { useRef } from 'react';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { McButton } from '@moxiworks/mds-alpha/react';
import products from '../helpers/kendoProducts.json';

export default function KendoGrid() {
  const _export = useRef(null);
  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }
  };
  return (
    <>
      <h2 className='my-24'>Kendo Table Grid</h2>
      <ExcelExport data={products} ref={_export}>
        <Grid data={products}>
          <GridToolbar>
            <McButton title='Export Excel' onClick={excelExport}>
              Export to Excel
            </McButton>
          </GridToolbar>
          <GridColumn field='ProductID' title='Product ID' width='50px' />
          <GridColumn field='ProductName' title='Product Name' width='350px' />
          <GridColumn field='UnitPrice' title='Price' />
          <GridColumn field='UnitsInStock' title='In stock' />
          <GridColumn field='Discontinued' title='Discontinued' />
        </Grid>
      </ExcelExport>
    </>
  );
}
