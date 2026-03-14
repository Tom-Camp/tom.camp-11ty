---
title: Germinator
description: Propagation domination!
date: 2026-03-13
repo: "https://github.com/Tom-Camp/germinator"
hardware:
  - name: "Raspberry Pi Pico W 2"
    url: "https://www.raspberrypi.com/products/raspberry-pi-pico-2/"
  - name: "AHT20 - Temp, Humidity sensor"
    url: "https://www.adafruit.com/product/4566"
  - name: "I2C Soil Moisture Sensor"
    url: "https://www.adafruit.com/product/4026"
  - name: "iPower Seeding Heat Mat"
    url: "https://www.ipower.com/collections/seed-starting/products/heat-mat"
images:
  - src: "/img/germinator_x.jpeg"
    alt: "Germinator exterior"
  - src: "/img/germinator.jpeg"
    alt: "Germinator"
topics:
  - RP2040
  - MicroPython
  - Gardening
  - IoT
---

When my wife mentioned that she wanted to start some seeds indoors, I immediately thought of ways to
completely overengineer the process. Of course, we'd need a warming mat and a ton of LEDs. While we're
at it, why not add some sensors to monitor the environment? And thus, the Germinator was born.

After getting the mat, I found some WS2812B RGB panel light strip with 256 individually addressable LEDS
for crazy cheap on AliExpress, so I order 10 of them. I grabbed a Raspberry Pi Pico W 2 and an AHT20
temperature and humidity sensor, and an I2C soil moisture sensor, and hooked everything all together.
Then came the question _"Okay, now what?"_.

## The API

I decided to use FastAPI for the API server, and I set up a simple endpoint to receive the data from the
sensors. I also set up an endpoint that the Germinator can hit to determine what phase the seeds are in,
so that it can adjust the lighting accordingly. Oh, did I mention photobiology? Yeah, that was a bit of
a rabbit hole.

## Photobiology 🐇🕳️

I found some research on the optimal light spectrum for seed germination, root growth, leaf growth, etc.
and I programmed the Germinator to adjust the LED colors based on the phase of growth. We aren't doing any
AI action to determine the phase, instead we just tweak the values returned by the endpoint.

Key wavelength ranges
Full spectrum grow light

- **UV‑B (≈280–315 nm)**: Can stimulate production of protective compounds like flavonoids and phenolic
  acids; generally used sparingly because it’s stressful in excess.
- **UV‑A / near‑UV (≈315–400 nm)**: Helps with pigmentation, leaf thickening, and overall plant health; can
  contribute slightly to photosynthesis at the long end of this range.
- **Blue (≈400–500 nm)**: Critical for vegetative growth, compact form, strong stems and roots, stomatal
  opening, and chlorophyll and auxin regulation.
- **Green (≈500–600 nm)**: Less efficient per photon for photosynthesis than red/blue, but still used;
  penetrates deeper into the canopy and supports inner/shaded leaves.
- **Yellow–red (≈600–700 nm)**: Core photosynthesis band and “workhorse” for biomass; promotes stem
  elongation, flowering, fruiting, and seed germination.
- **Far‑red (≈700–750/800 nm)**: Not classic PAR but enhances photosynthesis when combined with red;
  influences phytochrome, shade‑avoidance, extension growth, flowering timing, and node spacing.

## Front end

Well, if you have an API, and a bunch of data, you need a front end to visualize it, right? I set up a
simple React app to display the data from the sensors and the current phase of growth. It's nothing fancy,
but it gets the job done.

[Check out the dashboard here](https://dash.tom.camp/germinator)
