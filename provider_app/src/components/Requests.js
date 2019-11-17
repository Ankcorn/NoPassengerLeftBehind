import React from 'react';
import Request from './Request';
import gql from 'graphql-tag';
import { useSubscription } from '@apollo/react-hooks';

const all = gql`
subscription {
  allRequests {
    edges {
      node {
        id
        currentPosition
        comment
        start
        status
        startTime
        stop
        toc
        passengerByPassengerId {
          pic
          phone
          name
        }
        actionsByRequestId {
          edges {
            node {
              staffByStaffId {
                name
              }
              stage
              done
            }
          }
        }
      }
    }
  }
}
`;
function Table() {
  const { data, loading } = useSubscription(all);
  if (loading) return null;
  console.log(data.allRequests)
  return (
    <div className="mx-6 flex-1 overflow-y-auto">
      {data.allRequests.edges.map(r => <Request
        id={r.node.id}
        name={r.node.passengerByPassengerId.name}
        comment={r.node.comment}
        phone={r.node.passengerByPassengerId.phone}
        start={r.node.start}
        stop={r.node.stop}
        pic={r.node.passengerByPassengerId.pic}
        helping={r.node.actionsByRequestId.edges.length > 0 ? r.node.actionsByRequestId.edges.map(el => ({ staff: el.node.staffByStaffId.name, done: el.node.done, stage: el.node.stage })).sort((a, b) => parseInt(a.stage) - parseInt(b.stage)) : []}
        // helping={r.node.actionsByRequestId.edges.map(el => ({ staff: el.staffByStaffId.name, done: el.done, stage: el.stage })).sort((a, b) => parseInt(a.stage) - parseInt(b.stage))}

        toc={r.node.toc}
        end_time={new Date(r.node.startTime).toTimeString().split(' ')[0]}
      // delayed="stop"
      />)}
    </div>
  )
}

export default Table;
