import ExperienceItem from './ExperienceItem'

const Experience = () => (
  <div className="experience-layout">
    <ExperienceItem
      entity="Actuate"
      link="https://actuate.ai"
      position="Senior Software Engineer, ML, Scaling, &amp; DevOps"
      timeframe="/22-"
    />
    <ExperienceItem
      entity="Vocal Clarity"
      link="https://www.vocalclarity.ai"
      position="Lead Software Engineer, ML &amp; DevOps"
      timeframe="/21-22"
    />
    <ExperienceItem
      entity="EcoLong"
      link="https://www.eco-long.com"
      position="Full-Stack &amp; DevOps"
      timeframe="/21"
    />
    <ExperienceItem
      entity="Vocal Clarity"
      link="https://www.vocalclarity.ai"
      position="Software Engineer"
      timeframe="/20-21"
    />
    <ExperienceItem
      entity="CUNY Research Foundation"
      link="https://www.rfcuny.org"
      position="ML Research Assistant"
      timeframe="/20"
    />
    <ExperienceItem
      entity="Brooklyn College"
      link="https://www.brooklyn.cuny.edu"
      position="B.S. in Computer Science, 3.98"
      timeframe="/17-20"
    />
    <ExperienceItem
      entity="New York University"
      link="https://www.nyu.edu"
      position="B.A. in Music"
      timeframe="/08-12"
      lastItem={true}
    />
  </div>
)

export default Experience
