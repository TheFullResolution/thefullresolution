import { graphql } from 'gatsby'
import * as React from 'react'
import { Page } from '../components/Page/Page'
import { ResumeDataQuery } from '../graphql-types'
import { Resume } from '../components/Resume/Resume'

interface Props {
  data: ResumeDataQuery
}

const ResumePage: React.FC<Props> = ({ data }) => {
  return (
    <Page>
      <Resume data={data} />
    </Page>
  )
}

export default ResumePage

export const query = graphql`
  query ResumeData {
    contentJson {
      name
      phone
      email
      links {
        name
        url
      }
      section {
        title
        date_display
        content {
          name
          position
          location
          url
          description
          started
          present
          finished
          technologies
          accomplishments
        }
      }
    }
  }
`
