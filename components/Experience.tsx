import ExperienceItem from './ExperienceItem'

const Experience = () => (
  <div>
    <ExperienceItem
      entity="Vocal Clarity"
      position="Software Engineer, ML Engineer, DevOps"
      timeframe="/21-"
    />
    <ExperienceItem
      entity="EcoLong"
      position="Full-Stack Engineer, DevOps"
      timeframe="/21"
    />
    <ExperienceItem
      entity="Vocal Clarity"
      position="Software Engineer, ML Engineer"
      timeframe="/20-21"
    />
    <ExperienceItem
      entity="CUNY Research Foundation"
      position="Machine Learning Researcher"
      timeframe="/20"
    />
    <ExperienceItem
      entity="Brooklyn College"
      position="B.S. in Computer Science, 3.98 GPA"
      timeframe="/17-20"
    />
    <ExperienceItem
      entity="New York University"
      position="B.A. in Music"
      timeframe="/08-12"
      lastItem={true}
    />
  </div>
)

export default Experience
