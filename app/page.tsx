'use client'
import {Button, Card, Hero, Theme} from "react-daisyui";
import {useState} from "react";

export default function Home() {

    const themes = [
        "caltrain",
        "samtrans",
        "actransit",
        "vta",
        'aqua', // WETA
        'retro', // MUNI
    ]


    const [theme, setTheme] = useState(themes[0])
    const themeChange: () => any = () => {
        // lets just cycle through the array
        const index = themes.indexOf(theme)
        const nextIndex = index + 1
        if (nextIndex >= themes.length) {
            setTheme(themes[0])
        } else {
            setTheme(themes[nextIndex])
        }
    }



  return (
      <Theme dataTheme={theme}>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <Hero>
                  <Hero.Content className="text-center">
                      <div className="max-w-md">
                          <h1 className="text-5xl font-bold">Hello there</h1>
                          <p className="py-6">
                              Here is a simple example of how to change the theme of the site depending on how they come
                              in.
                          </p>

                          <div className="flex justify-center">
                              <Card>
                                  <Card.Actions>
                                      <Button color="primary" className={'w-full'} onClick={themeChange}>Click to Change
                                          Theme</Button>
                                      <Button color="neutral" className={'w-full'} variant={'outline'}>Current
                                          theme: {theme}</Button>
                                  </Card.Actions>
                              </Card>
                          </div>


                      </div>
                  </Hero.Content>
              </Hero>
          </main>
      </Theme>
  );
}
