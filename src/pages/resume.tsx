import { graphql } from 'gatsby';
import * as React from 'react';

import { Page } from '../containers/Page/Page';
import { Resume } from '../containers/Resume/Resume';
import { ResumeDataQuery } from '../graphql-types';

interface Props {
  data: ResumeDataQuery;
}

const ResumePage: React.FC<Props> = ({ data }) => {
  return (
    <Page
      page="Resume"
      banner={data.resume.banner}
      banner_position={data.resume.banner_position}
      banner_source={data.resume.banner_source}
    >
      <Resume data={data} />
    </Page>
  );
};

export default ResumePage;

export const query = graphql`
  query ResumeData {
    resume {
      name
      banner
      banner_position
      banner_source
      phone
      email
      contact {
        item
      }
      skills {
        title
        technologies
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
`;
