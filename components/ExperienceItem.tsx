interface Props {
  entity: string
  link: string
  position: string
  timeframe: string
  lastItem?: boolean
}

const Experience = (props: Props) => {
  const { entity, link, position, timeframe, lastItem = false } = props
  return (
    <div
      className={
        'experience-item-layout' +
        (lastItem ? ' experience-item-layout-last' : '')
      }
    >
      <a href={link} target="_blank" rel="noreferrer">
        <p className="experience-position description-light"># {position}</p>
        <p className="experience-entity description">
          {entity}
          <span className="experience-timeframe description">{timeframe}</span>
        </p>
      </a>
    </div>
  )
}

export default Experience
