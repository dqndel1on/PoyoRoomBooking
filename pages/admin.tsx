import Head from 'next/head';
import React from 'react';
import AddBranch from '../components/AddBranch';
import BranchListAdmin from '../components/BranchListAdmin';
import CheckOut from '../components/CheckOut';
import UpdateBranch from '../components/UpdateBranch';

interface adminProps {}

const admin: React.FC<adminProps> = () => {
  return (
    <div className="container mx-auto px-20">
      <Head>
        <title>Add/Delete/Update Branch | Poyo</title>
      </Head>
      <AddBranch />
      <UpdateBranch />
      <CheckOut />
      <BranchListAdmin />
    </div>
  );
};

export default admin;
