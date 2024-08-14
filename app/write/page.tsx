"use client";

import Link from "next/link";
import styles from '../page.module.css'
import { FormEvent } from "react";

export default function write() {

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget.elements;

    const titleElement = formElement.namedItem("title") as HTMLInputElement
    const bodyElement = formElement.namedItem("body") as HTMLInputElement;

    const title = titleElement.value;
    const body = bodyElement.value;

    fetch("/api/notices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
  };
  return (
    <div className={styles.main}>
      <h1>write</h1>
      <form action="" onSubmit={onSubmit} className={styles.main}>
        <span>title</span>
        <input type="text" name="title" id="title" />
        <span>body</span>
        <textarea name="body" id="body" cols={30} rows={10} />
        <button className={styles.button} type="submit">submit</button>
      </form>
    </div>
  );
}
