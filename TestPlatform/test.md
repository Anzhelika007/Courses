Module 1: Introduction to Amazon Web Services.

1. What is cloud computing?

- [ ] Backing up files that are stored on desktop and mobile devices to prevent data loss
- [ ] Deploying applications connected to on-premises infrastructure
- [ ] Running code without needing to manage or provision servers
- [x] On-demand delivery of IT resources and applications through the internet with pay-as-you-go pricing

#### Module 2: Compute in the cloud.

2. Which Amazon EC2 instance type is suitable for data warehousing applications?

- [ ] Memory optimized
- [x] Storage optimized
- [ ] General purpose
- [ ] Compute optimized

3. Which Amazon EC2 instance type balances compute, memory, and networking resources?

- [ ] Memory optimized
- [ ] Storage optimized
- [x] General purpose
- [ ] Compute optimized

4. Which Amazon EC2 instance type is ideal for high-performance databases?

- [x] Memory optimized
- [ ] Storage optimized
- [ ] General purpose
- [ ] Compute optimized

5. Which Amazon EC2 instance type offers high-performance processors?

- [ ] Memory optimized
- [ ] Storage optimized
- [ ] General purpose
- [x] Compute optimized

6. Which Amazon EC2 pricing option provides a discount when you specify a number of EC2 instances to run a specific OS, instance family and size, and tenancy in one Region?

- [ ] Convertible Reserved Instances
- [ ] EC2 Instance Savings Plans
- [ ] Spot Instances
- [x] Standard Reserved Instances

7. Which Amazon EC2 pricing option provides a discount when you make an hourly spend commitment to an instance family and Region for a 1-year or 3-year term?

- [ ] On-demand
- [x] EC2 Instance Savings Plans
- [ ] Spot Instances
- [ ] Reserved Instances

8. Which AWS service is the best choice for publishing messages to subscribers?

- [ ] Amazon Simple Queue Service (Amazon SQS)
- [ ] Amazon EC2 Auto Scaling
- [x] Amazon Simple Notification Service (Amazon SNS)
- [ ] Elastic Load Balancing

9. You want to use an Amazon EC2 instance for a batch processing workload. What would be the best Amazon EC2 instance type to use?

- [ ] General purpose
- [ ] Memory optimized
- [x] Compute optimized
- [ ] Storage optimized

10. What are the contract length options for Amazon EC2 Reserved Instances? (Select TWO.)

- [x] 1 year
- [ ] 2 years
- [x] 3 years
- [ ] 4 years
- [ ] 5 years

11. You have a workload that will run for a total of 6 months and can withstand interruptions. What would be the most cost-efficient Amazon EC2 purchasing option?

- [ ] Reserved Instance
- [x] Spot Instance
- [ ] Dedicated Instance
- [ ] On-Demand Instance

12. Which process is an example of Elastic Load Balancing?

- [x] Ensuring that no single Amazon EC2 instance has to carry the full workload on its own
- [ ] Removing unneeded Amazon EC2 instances when demand is low
- [ ] Adding a second Amazon EC2 instance during an online store’s popular sale
- [ ] Automatically adjusting the number of Amazon EC2 instances to meet demand

13. You want to deploy and manage containerized applications. Which service should you use?

- [ ] AWS Lambda
- [ ] Amazon Simple Notification Service (Amazon SNS)
- [ ] Amazon Simple Queue Service (Amazon SQS)
- [x] Amazon Elastic Kubernetes Service (Amazon EKS)

#### Module 3: Global infrastructure and reliability.

14. Which statement best describes an Availability Zone?

- [ ] A geographical area that contains AWS resources
- [x] A single data center or group of data centers within a Region
- [ ] A data center that an AWS service uses to perform service-specific operations
- [ ] A service that you can use to run AWS infrastructure within your own on-premises data center in a hybrid approach

15. Which statement is TRUE for the AWS global infrastructure?

- [ ] A Region consists of a single Availability Zone.
- [ ] An Availability Zone consists of two or more Regions.
- [x] A Region consists of three or more Availability Zones.
- [ ] An Availability Zone consists of a single Region.

16. Which factors should be considered when selecting a Region? (Select TWO.)

- [x] Compliance with data governance and legal requirements
- [x] Proximity to your customers
- [ ] Access to 24/7 technical support
- [ ] Ability to assign custom permissions to different users
- [ ] Access to the AWS Command Line Interface (AWS CLI)

17. Which statement best describes Amazon CloudFront?

- [ ] A service that enables you to run infrastructure in a hybrid cloud approach
- [ ] A serverless compute engine for containers
- [ ] A service that enables you to send and receive messages between software components through a queue
- [x] A global content delivery service

18. Which site does Amazon CloudFront use to cache copies of content for faster delivery to users at any location?

- [ ] Region
- [ ] Availability Zone
- [x] Edge location
- [ ] Origin

19. Which action can you perform with AWS Outposts?

- [ ] Automate actions for AWS services and applications through scripts.
- [ ] Access wizards and automated workflows to perform tasks in AWS services.
- [ ] Develop AWS applications in supported programming languages.
- [x] Extend AWS infrastructure and services to different locations including your on-premises data center.

#### Module 4: Networking

20. Which statement best describes an AWS account’s default network access control list?

- [ ] It is stateless and denies all inbound and outbound traffic.
- [ ] It is stateful and allows all inbound and outbound traffic.
- [x] It is stateless and allows all inbound and outbound traffic.
- [ ] It is stateful and denies all inbound and outbound traffic.

21. Which statement best describes DNS resolution?

- [ ] Launching resources in a virtual network that you define
- [ ] Storing local copies of content at edge locations around the world
- [ ] Connecting a VPC to the internet
- [x] Connecting a VPC to the internet

22. Your company has an application that uses Amazon EC2 instances to run the customer-facing website and Amazon RDS database instances to store customers’ personal information. How should the developer configure the VPC according to best practices?

- [ ] Place the Amazon EC2 instances in a private subnet and the Amazon RDS database instances in a public subnet.
- [x] Place the Amazon EC2 instances in a public subnet and the Amazon RDS database instances in a private subnet.
- [ ] Place the Amazon EC2 instances and the Amazon RDS database instances in a public subnet.
- [ ] Place the Amazon EC2 instances and the Amazon RDS database instances in a private subnet.

23. Which component can be used to establish a private dedicated connection between your company’s data center and AWS?

- [ ] Private subnet
- [ ] DNS
- [x] AWS Direct Connect
- [ ] Virtual private gateway

24. Which statement best describes security groups?

- [x] They are stateful and deny all inbound traffic by default.
- [ ] They are stateful and allow all inbound traffic by default.
- [ ] They are stateless and deny all inbound traffic by default.
- [ ] They are stateless and allow all inbound traffic by default.

25. Which component is used to connect a VPC to the internet?

- [ ] Public subnet
- [ ] Edge location
- [ ] Security group
- [x] Internet gateway

26. Which service is used to manage the DNS records for domain names?

- [ ] Amazon Virtual Private Cloud
- [ ] AWS Direct Connect
- [ ] Amazon CloudFront
- [x] Amazon Route 53

#### Module 5: Storage and databases

27. Which of the following are characteristics of the Amazon EBS service? (Select TWO.)

- [x] Best for data that requires retention
- [ ] Best for temporary data that is not kept long term
- [x] Separate drives from the host computer of an EC2 instance
- [ ] Physically attached to the host computer of an EC2 instance
- [ ] Data is deleted when an EC2 instance is stopped

28. You want to store data that is infrequently accessed but must be immediately available when needed. Which Amazon S3 storage class should you use?

- [ ] S3 Intelligent-Tiering
- [ ] S3 Glacier Deep Archive
- [x] S3 Standard-IA
- [ ] S3 Glacier Flexible Retrieval

29. What are the scenarios in which you should use Amazon Relational Database Service (Amazon RDS)? (Select TWO.)

- [ ] Running a serverless database
- [x] Using SQL to organize data
- [ ] Storing data in a key-value database
- [ ] Scaling up to 10 trillion requests per day
- [x] Storing data in an Amazon Aurora database

30. Which Amazon S3 storage classes are optimized for archival data? (Select TWO.)

- [ ] Amazon S3 Standard
- [x] Amazon S3 Glacier Flexible Retrieval
- [ ] Amazon S3 Intelligent-Tiering
- [ ] Amazon S3 Standard-IA
- [x] Amazon S3 Glacier Deep Archive

31. Which statement or statements are TRUE about Amazon EBS volumes and Amazon EFS file systems?

- [x] EBS volumes store data within a single Availability Zone. Amazon EFS file systems store data across multiple Availability Zones.
- [ ] EBS volumes store data across multiple Availability Zones. Amazon EFS file systems store data within a single Availability Zone.
- [ ] EBS volumes and Amazon EFS file systems both store data within a single Availability Zone.
- [ ] EBS volumes and Amazon EFS file systems both store data across multiple Availability Zones.

32. You want to store data in an object storage service. Which AWS service is best for this type of storage?

- [ ] Amazon Managed Blockchain
- [ ] Amazon Elastic File System (Amazon EFS)
- [ ] Amazon Elastic Block Store (Amazon EBS)
- [x] Amazon Simple Storage Service (Amazon S3)

33. Which statement best describes Amazon DynamoDB?

- [ ] A service that enables you to run relational databases in the AWS Cloud
- [x] A serverless key-value database service
- [ ] A service that you can use to migrate relational databases, nonrelational databases, and other types of data stores
- [ ] An enterprise-class relational database

34. Which service is used to query and analyze data across a data warehouse?

- [x] Amazon Redshift
- [ ] Amazon Neptune
- [ ] Amazon DocumentDB
- [ ] Amazon ElastiCache

35.

- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
