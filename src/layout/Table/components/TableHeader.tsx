import { TableLabels } from "../../../helpers"
import { TableHeaderContainer, TableHeaderLabel } from "../../../styles"

export const TableHeader = () => (
  <TableHeaderContainer>
    {TableLabels.map((label: string, index: number) => (
      <TableHeaderLabel key={index}>
        {label}
      </TableHeaderLabel>
    ))}
  </TableHeaderContainer>
)

