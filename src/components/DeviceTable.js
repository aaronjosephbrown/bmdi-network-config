import { tableHeader } from './table/tableHeader'
import { tableBody } from './table/tableBody'

const DeviceTable = ({ devices }) => {
  return (
    <div className='overflow-x-auto w-full'>
      <table className='table table-compact table-zebra w-full'>
        {tableHeader}
        {tableBody({ devices })}
      </table>
    </div>
  )
}

export default DeviceTable
