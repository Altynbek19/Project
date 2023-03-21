import { 
    Outlet,
     Link ,
     useLoaderData,
     Form,
    } from "react-router-dom";
    import { getContacts, createContact } from "../contacts";


export async function loader() {
    const contacts = await getContacts();
    return { contacts };
  }

  export async function action() {
    const contact = await createContact();
    return { contact };
  }
export default function Root() {
    const { contacts } = useLoaderData();
    return (
      <>
        <div id="sidebar">
        <Outlet />
          <h1>React Router Contacts</h1>

          <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>

          <div>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`contacts/1`}>Your Name</Link>
              </li>
              <li>
              <Link to={`contacts/2`}>Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }