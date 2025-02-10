import Events from "./events";
import {getAllEvents} from "@/lib/sanity/client"
export default async function EventsPage(){
  const events = await getAllEvents();

  return <Events events={events}/>;
}

// export const revalidate = 60;
