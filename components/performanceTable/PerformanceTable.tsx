import { PerformanceDataItem } from '@/helpers/types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@aws-amplify/ui-react'

interface PerformanceTableProps {
  data: PerformanceDataItem[]
}

export const PerformanceTable = ({ data }: PerformanceTableProps) => {
  return (
    <div>
      <Table
        caption="Performance Template"
        highlightOnHover={true}
        size="large"
        variation="bordered"
      >
        <TableHead>
          <TableRow>
            <TableCell as="th">Measure</TableCell>
            <TableCell as="th">Unit</TableCell>
            <TableCell as="th">Target</TableCell>
            <TableCell as="th">Weight</TableCell>
            <TableCell as="th">Machine Output</TableCell>
            <TableCell as="th">Jan</TableCell>
            <TableCell as="th">Feb</TableCell>
            <TableCell as="th">Apr</TableCell>
            <TableCell as="th">May</TableCell>
            <TableCell as="th">Jun</TableCell>
            <TableCell as="th">Avg</TableCell>
            <TableCell as="th">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.measure}</TableCell>
              <TableCell>{row.unit}</TableCell>
              <TableCell>{row.target}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>{row.machineOutput}</TableCell>
              <TableCell>{row.Jan}</TableCell>
              <TableCell>{row.Feb}</TableCell>
              <TableCell>{row.Apr}</TableCell>
              <TableCell>{row.May}</TableCell>
              <TableCell>{row.Jun}</TableCell>
              <TableCell>{row.Avg}</TableCell>
              <TableCell>{row.Total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
