---
title: NuLay Inn
description: Who puts a sensor package in a chicken coop!?
date: 2026-03-01
repo: "https://github.com/Tom-Camp/nulayinn"
hardware:
  - name: "Adafruit Feather RP2040 RFM95"
    url: "https://www.adafruit.com/product/5714"
  - name: "BME680 - Temp, Humidity, and Gas Sensor"
    url: "https://www.adafruit.com/product/3660"
  - name: "AHT20 - Temp & Humidity Sensor"
    url: "https://www.adafruit.com/product/4566"
topics:
  - RP2040
  - Chickens
  - LoRa
  - CircuitPython
---

The NuLay Inn is a sensor package for monitoring the environment in our chicken coop. It is designed to
be used with the Adafruit Feather RP2040 RFM95, an Adafruit BME680 - Temperature, Humidity, Pressure
and Gas Sensor, and an Adafruit AHT20 - Temperature & Humidity Sensor Breakout Board.

The name NuLay Inn is a nod to the historic NuWray Hotel here in Burnsville, North Carolina.

Features
The system is designed to run with a battery and solar panel, and is capable of sending data to a server
via LoRa. The data is then sent to an API server for storage and analysis. The system is designed to be
low power, with a sleep mode that sends data every hour. The AHT20 sensor is used for temperature and
humidity outside the coop, while the BME680 sensor is for temperature, humidity, pressure and gas inside
the coop.

The code includes a power management system that monitors the battery voltage and puts the system to
sleep if the voltage drops below a certain threshold to prevent malformed packets. The system wakes up
every hour to take a reading and sends the data to a Raspberry Pi RFM9x receiver. The receiver then relays
the data to an API server.
