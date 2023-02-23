export const tableBody = ({ devices }) => (
  <tbody>
    {devices.sort(sortAscending).map((device, i) => (
      <tr key={device.deviceName}>
        <td>{i + 1}</td>
        <td>{device.deviceName}</td>
        <td class="min-w-[10rem] whitespace-normal">{device.deviceType}</td>
        <td class="min-w-[10rem] whitespace-normal">{device.vendor}</td>
        <td>{device.model}</td>
        <td>{device.connectionMethod}</td>
        <td class="min-w-[10rem] whitespace-normal">{device.Digi_Cable}</td>
        <td>{device.Baud_Rate}</td>
        <td>{device.Parity}</td>
        <td>{device.Stop_Bits}</td>
        <td>{device.Data_Bits}</td>
        <td class="min-w-[12rem] max-w-[20rem] whitespace-normal">{device.Notes}</td>
      </tr>
    ))}
  </tbody>
)


const sortAscending = (a, b) => {
  if (a.deviceName < b.deviceName) {
    return -1;
  }
  if (a.deviceName > b.deviceName) {
    return 1;
  }
  return 0;
}