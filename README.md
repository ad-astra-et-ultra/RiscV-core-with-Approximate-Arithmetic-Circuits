# RiscV-core-with-Approximate-Arithmetic-Circuits
Analysis of performance of approximate arithmetic circuits compared to their precise counterparts.

## Description
In this project I have implemented a 32-bit, RISC-V ISA based processor in verilog with a low latency approximate adder and analysed its performance relative to
an accurate adder. I have made two separate models of the processor in verilog. One of them uses a low latency approximate adder instead of a normal adder. As a result
it produces some error. Such non-precise adders can be used for certain applications where we can safely tradeoff accuracy for reducing area and power usage. The 
sub-modules that are used and their interaction with each other are shown in the following picture.

![Screenshot (82)](https://user-images.githubusercontent.com/92263062/218332253-1fdd301b-46d5-49ff-b189-aa46b0f897f3.png)

## Simulation Results snapshot

![Screenshot (83)](https://user-images.githubusercontent.com/92263062/218335261-af35d574-7c4f-4031-a75b-65fe08cd649c.png)

## Heatmap of the absolute error produced by the approximate adder

![Screenshot (77)](https://user-images.githubusercontent.com/92263062/218334557-6d213076-03ed-4621-a573-35768af7d513.png)
