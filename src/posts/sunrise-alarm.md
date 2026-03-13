---
title: Sunrise Alarm Clock
description: A sunrise alarm clock using a Raspberry Pi Pico and a NeoPixel block.
date: 2022-04-10
links:
  - name: "Github repository"
    url: "https://github.com/Tom-Camp/pico-sunrise"
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

## Dawn simulation

> Dawn simulation is a technique that involves timing lights, often called wake
> up lights, sunrise alarm clock or natural light alarm clocks, in the bedroom to
> come on gradually, over a period of 30 minutes to 2 hours, before awakening to
> simulate dawn.

The idea is that the gradual increase in light can help to regulate the body's
circadian rhythm and make waking up feel more natural and less jarring than a
sudden alarm. The light can also help to suppress the production of melatonin,
a hormone that makes you feel sleepy, and increase the production of serotonin,a
hormone that makes you feel awake and alert.

## Implementation

The sunrise alarm clock is implemented using a Raspberry Pi Pico 2. The Pico 2 doesn't
have a built-in real-time clock (RTC), so the time is kept using the `time` module in
MicroPython and Network Time Protocol (NTP) to synchronize the time with an NTP server.
The Pico contains a config file that lists the time to wake for each day of the week.
After the Pico runs it calculates the time until the next wake time and starts a timer.
When the timer expires, the dawn simulation starts.

The NeoPixel block is used to create a gradual increase in light intensity over a period,
starting with 2 pixels and increasing to 32 pixels and then increasing the brightness. The
process runs for about 30 minutes.
