import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import RoomDetails from '../../components/RoomDetails';
import usePoyo from '../../store/contract.store';

interface BranchNameProps {}

const BranchName: React.FC<BranchNameProps> = () => {
  const router = useRouter();
  const { getBranchDetails, branchDetails } = usePoyo();

  React.useEffect(() => {
    if (router.query.slug) {
      getBranchDetails(Number(router.query.slug));
    }
  }, [router.query.slug]);

  if (!router.isFallback) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Head>
        <title>{router.query.slug} | Poyo Room Booking</title>
      </Head>
      <section className="container mx-auto p-20">
        <div className="text-pink-600">
          <h1 className="font-black text-4xl">Branch: {branchDetails[0]}</h1>
          <h2 className="mt-2 text-xl">Branch ID: {Number(branchDetails[2])}</h2>
          <p className="bg-black px-3 py-2 text-white">
            The rooms are located in parallel universe, that's why all the rooms look similar. Trust
            me bruh..!!
          </p>
        </div>
        <div className="flex justify-between flex-wrap items-center">
          {branchDetails[1] &&
            Array.apply(null, Array(Number(branchDetails[1]))).map((branch, i: number) => (
              <RoomDetails
                branchName={branchDetails[0]}
                branchId={Number(branchDetails[2])}
                roomNumber={i + 1}
                key={i}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default BranchName;
