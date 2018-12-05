import React, {Component} from 'react';
import { Query } from "react-apollo";


class Page extends Component {
  render() {
    const {children, query} = this.props;
    return (
        <Query query={query}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return children({data});
          }}
        </Query>
    )
  };
}

export default Page;
