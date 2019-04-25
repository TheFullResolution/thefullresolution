import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { HelmetDataQuery } from '../../graphql-types'

export const MetaData: React.FC = () => {
  const data: HelmetDataQuery = useStaticQuery(graphql`
    query HelmetData {
      siteMetaData {
          title
          description
        }
    }
  `)
  const { title, description } = data.siteMetaData

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: 'developer, front-end, frontend, Jedrzej Lewandowski',
        },
      ]}
    />
  )
}
