import Projects from '../components/Projects'
import WorkExperience from '../components/WorkExperience'
import Education from '../components/Education'
import About from './About'
import Hero from '../components/Hero'

import { about, education, hero, projects, workExperience } from '../config'
export default function Landing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <Hero {...hero}/>
      <WorkExperience {...workExperience} />
      <Projects {...projects}/>
      <Education {...education}/>
      <About {...about}/>
    </section>
  )
}
