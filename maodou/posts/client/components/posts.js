import React from 'react';
import {Link} from 'react-router';

import Loading from 'client/components/common/loading';

export default (props) => {
  const T = props.context.T;
  return (
    <div className="container">
      <div className="row">
        {
          props.posts.status === 'ready' ?
            props.posts.data.length > 0 ?
              props.posts.data.map((post, index) =>
                <div key={index} className="col-sm-12">
                  <div className="hpanel blog-box">
                    <div className="panel-heading">
                      <div className="media clearfix">
                        <Link to="#" className="pull-left">
                          <img src="/images/a8.jpg" alt="profile-picture" />
                        </Link>
                        <div className="media-body">
                          <small>Created by: <span className="font-bold">Mike Smith</span></small>
                          <br />
                            <small className="text-muted">21.03.2015, 06:45 pm</small>
                        </div>
                      </div>
                    </div>
                    <div className="panel-body">
                      <Link to={`/post/${post._id}`}>
                        <h4>[{post.category}] {post.title}</h4>
                        <p>{post.plainContent}</p>
                      </Link>
                    </div>
                    <div className="panel-footer">
                    <span className="pull-right">
                        <i className="fa fa-comments-o" /> 22 <T.text text={{ key: 'comments' }} />
                    </span>
                      <i className="fa fa-eye" /> 142 views
                    </div>
                  </div>
                </div>
              ) :
              <div>no post</div> :
            <Loading />
        }
      </div>
    </div>
  );
}
