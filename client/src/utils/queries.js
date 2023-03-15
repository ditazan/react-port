import { gql } from '@apollo/client';

export const QUERY_ALL_PROJECTS= gql`
{
    projects {
        _id
        title
        process
        description
        filter {
            _id
        }
    }
}
`;

export const QUERY_FILTERS = gql`
    {
        filters {
            _id
            name
        }
    }
`;