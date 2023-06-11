import Projects from '../components/Projects'
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'
import About from './About'
import Education from '../components/Education'
export default function Landing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <Hero />
      <WorkExperience />
      <Projects />
      <Education />
    </section>
  )
}
