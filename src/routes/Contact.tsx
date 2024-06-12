import { Form } from "react-router-dom";

interface Props {
  id?:any;
  first?: string;
  last?: string;
  avatar?: string;
  twitter?: string;
  notes?: string;
  favorite?: Boolean;
}
export const Contact = ({
    id,
    first = "Your",
    last = "Name",
    avatar = "https://robohash.org/you.png?size=200x200",
    twitter = "your_handle",
    notes = "Some notes",
    favorite=  true,
}: Props): JSX.Element => {

  return (
    <div id="contact">
      <div>
        <img
          key={avatar}
          src={
            avatar ||
            `https://robohash.org/${id}.png?size=200x200`
          }
        />
      </div>

      <div>
        <h1>
          {first || last ? (
            <>
              {first} {last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite 
          avatar={avatar}
          favorite={favorite} 
          first={first}
          last={last}
          notes={notes}
          twitter={twitter}
          />
        </h1>

        {twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${twitter}`}
            >
              {twitter}
            </a>
          </p>
        )}

        {notes && <p>{notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite(contact : Props) {
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}