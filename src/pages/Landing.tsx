import Projects from '../components/Projects'
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'
import Education from '../components/Education'
import About from './About'
export default function Landing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <Hero />
      <WorkExperience />
      <Projects />
      <Education />
      <About>

      </About>
    </section>
  )
}
