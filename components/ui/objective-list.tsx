import { Checkmark } from '@carbon/icons-react'

type ObjectiveListProps = {
  objectives: readonly string[]
}

export function ObjectiveList({ objectives }: ObjectiveListProps) {
  return (
    <ul className="objective-list">
      {objectives.map((objective) => (
        <li key={objective}>
          <Checkmark size={20} />
          <span>{objective}</span>
        </li>
      ))}
    </ul>
  )
}
