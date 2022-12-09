import { gql, useMutation } from '@apollo/client';
const QUERY = gql`
  mutation createJob($input: PostJobInput!) {
    postJob(input: $input) {
      id
      title
      company {
        name
      }
      description
      applyUrl
      userEmail
    }
  }
`;

const useCreateJob = (input) => {
  const { loading, data, error } = useMutation(QUERY, {
    variables: {
      input: {
        title: 'Senior Software Engineer',
        commitmentId: 'cjtu8esth000z0824x00wtp1i',
        companyName: 'Jutt 123',
        locationNames: 'LHR',
        userEmail: 'z@gmail.com',
        description: 'ABC 123',
        applyUrl: 'https://abc.com',
      },
    },
  });
  // console.log(loading,data,error);
  return {
    loading,
    data,
    error,
  };
};
export default useCreateJob;
