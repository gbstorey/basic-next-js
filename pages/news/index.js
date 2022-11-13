import {Fragment} from "react";
import Link from "next/link";

function NewsPage() {
    return <Fragment>
        <h1>The News page</h1>
        <ul>
            <li>
                <Link href='/news/next-js-is-great'>NextJS is a great framework</Link>
            </li>
            <li>Something else</li>
        </ul>
    </Fragment>;
}

export default NewsPage;