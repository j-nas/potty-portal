import Head from "next/head";
import { H1 } from "~/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
} from "~/components/ui/card";
import Map from "react-map-gl";
import { env } from "~/env.mjs";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";

export default function Home() {
  const [viewState, setViewState] = useState({
    longitude: -120.6069,
    latitude: 45.2146,
    zoom: 11,
  });
  const [loading, setLoading] = useState(true);
  const [geoAvailable, setGeoAvailable] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Geolaction Available");
      setGeoAvailable(true);
      navigator.geolocation.getCurrentPosition((position) => {
        setViewState((v) => ({
          ...v,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        }));
        setLoading(false);
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Potty Portal</title>
        <meta name="description" content="Crowd-sourced public toilets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <div className="mx-1 flex flex-col place-items-center sm:mx-6">
          <Card className=" mt-12 w-full shadow-2xl shadow-violet-950">
            <CardHeader>
              <H1 className="">Potty Portal🚻</H1>
              <CardDescription>
                Find, add, and rate public restrooms
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              {!geoAvailable ? (
                <p>Please enable location services</p>
              ) : loading ? (
                <p>loading</p>
              ) : (
                <div className="">
                  <Map
                    mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                    initialViewState={{
                      latitude: viewState.latitude,
                      longitude: viewState.longitude,
                      zoom: viewState.zoom,
                    }}
                    onMove={(evt) => setViewState(evt.viewState)}
                    style={{
                      width: "100%",
                      height: "30rem",
                      borderRadius: "10px",
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                  />
                </div>
              )}
            </CardContent>
            <CardFooter className="space-x-2">
              <Button>Add restroom</Button>
              <Button>My Profile</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
}
