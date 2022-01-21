interface Props {
  entity: string
  position: string
  timeframe: string
  lastItem?: boolean
}

const Experience = (props: Props) => {
  const { entity, position, timeframe, lastItem = false } = props
  return (
    <div
      className={
        'experience-item-layout' +
        (lastItem ? ' experience-item-layout-last' : '')
      }
    >
      <p className="experience-position description-light"># {position}</p>
      <p className="experience-entity description">
        {entity}
        <span className="experience-timeframe description">{timeframe}</span>
      </p>
    </div>
  )
}

export default Experience
