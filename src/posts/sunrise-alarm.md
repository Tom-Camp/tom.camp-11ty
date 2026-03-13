---
title: Sunrise Alarm Clock
description: A sunrise alarm clock using a Raspberry Pi Pico and a NeoPixel block.
date: 2022-04-10
repo: "https://github.com/Tom-Camp/pico-sunrise"
hardware:
  - name: "Raspberry Pi Pico 2"
    url: "https://www.raspberrypi.com/products/raspberry-pi-pico-2/"
  - name: "NeoPixel FeatherWing - 4x8"
    url: "https://www.adafruit.com/product/2945"
images:
  - src: "/img/sunrise-alarm-clock.jpg"
    alt: "Sunrise alarm clock prototype"
topics:
  - Pi Pico
  - MicroPython
  - NeoPixels
---

I bought my first Raspberry Pi, a Model B, way back in 2012. I didn't know what I was going to do with it,
but for $35, I figured I'd check it out. I learn best by problem-solving, so I needed a project to work
through. I had heard about sunrise alarm clocks and really hated my traditional alarm clock, so I decided
to build a sunrise alarm clock using the Pi. I ordered a strip of LEDs from Adafruit and, since we were
living in Portland at the time, went to [Hippo Hardware and Trading Post](https://www.hippohardware.com)
to find a lamp. Now, I'm not sure if Hippo Hardware is still around, but if you are in the market for an
odd drawer pull, or random doorknob, fancy light fixture, or really just about anything that you could
attach to or put in your house or business, Hippo Hardware has it. I found an old ceiling lamp that I
figured I could use for the sunrise alarm clock and away we went.

> Dawn simulation is a technique that involves timing lights, often called wake
> up lights, sunrise alarm clock or natural light alarm clocks, in the bedroom to
> come on gradually, over a period of 30 minutes to 2 hours, before awakening to
> simulate dawn.

I programmed the sunrise alarm clock using Python, which at the time I was fairly new to, but it was pretty
straightforward and that lamp gently woke us for years. When we moved back to Colorado, I refactored the
lamp, getting rid of the old ceiling fixture and just stringing the LEDs up the corner of our bedroom.
I tweaked the code so that it stared lighting at the bottom of the strip and worked its way for a half-assed
attempt at simulating a sunrise, and it was okay. Good enough for government work, as they say.
