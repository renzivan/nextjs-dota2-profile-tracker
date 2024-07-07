import Image from "next/image";

// "use client";
type Params = { params: { id: string } }

async function fetchData(playerId: string) {
  const api_token = process.env.NEXT_PUBLIC_API_TOKEN;
  const res = await fetch(`https://api.stratz.com/api/v1/Player/${playerId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${api_token}`
    }
  });

  if (res.status !== 200) return null

  return res.json();
}

export default async function Profile({ params }: Params) {
  const data = await fetchData(params.id);

  return (
    <div>
      {data?.steamAccount ?
        <>
          {data.steamAccount.id}
          {data.steamAccount.profileUri}
          {data.steamAccount.name}
          <Image src={data.steamAccount.avatar} alt="" width={100} height={100} />
        </>
        :
        <>
          <h1>No user.</h1>
        </>
      }
    </div>
  )
}
