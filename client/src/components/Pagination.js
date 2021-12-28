import React from 'react'
import { Button } from 'react-bootstrap';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <Button onClick={gotoPrevPage}>Previous</Button>}
      {gotoNextPage && <Button onClick={gotoNextPage}>Next</Button>}
    </div>
  )
}