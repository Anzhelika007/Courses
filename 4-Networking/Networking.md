### Networking

`Amazon VPC` enables you to provision an isolated section of the `AWS Cloud`. In this isolated section, you can launch resources in a virtual network that you define. Within a virtual private cloud (VPC), you can organize your resources into subnets. A `subnet` is a section of a VPC that can contain resources such as Amazon EC2 instances.

### Internet gateway

To allow public traffic from the internet to access your VPC, you attach an internet gateway to the VPC.

An internet gateway is a connection between a VPC and the internet. You can think of an internet gateway as being similar to a doorway that customers use to enter the coffee shop. Without an internet gateway, no one can access the resources within your VPC.

### Virtual private gateway

The `virtual private` gateway is the component that allows protected internet traffic to enter into the VPC. Even though your connection to the coffee shop has extra protection, traffic jams are possible because you’re using the same road as other customers.
A virtual private gateway allows traffic into the VPC only if it is coming from an approved network.

### AWS Direct Connect

AWS Direct Connect is a service that lets you to establish a dedicated private connection between your data center and a VPC.
