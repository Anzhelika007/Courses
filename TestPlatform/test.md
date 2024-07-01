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

#### Module 6: Security

35. Which tasks are the responsibilities of customers? (Select TWO.)

- [ ] Maintaining network infrastructure
- [x] Patching software on Amazon EC2 instances
- [ ] Implementing physical security controls at data centers
- [x] Setting permissions for Amazon S3 objects
- [ ] Maintaining servers that run Amazon EC2 instances

36. You are configuring service control policies (SCPs) in AWS Organizations. Which identities and resources can SCPs be applied to? (Select TWO.)

- [ ] IAM users
- [ ] IAM groups
- [x] An individual member account
- [ ] IAM roles
- [x] An organizational unit (OU)

37. Which tasks can you complete in AWS Artifact? (Select TWO.)

- [x] Access AWS compliance reports on-demand.
- [ ] Consolidate and manage multiple AWS accounts within a central location.
- [ ] Create users to enable people and applications to interact with AWS services and resources.
- [ ] Set permissions for accounts by configuring service control policies (SCPs).
- [x] Review, accept, and manage agreements with AWS.

38. Which statement best describes an IAM policy?

- [ ] An authentication process that provides an extra layer of protection for your AWS account
- [x] A document that grants or denies permissions to AWS services and resources
- [ ] An identity that you can assume to gain temporary access to permissions
- [ ] The identity that is established when you first create an AWS account

39. An employee requires temporary access to create several Amazon S3 buckets. Which option would be the best choice for this task?

- [ ] AWS account root user
- [ ] IAM group
- [x] IAM role
- [ ] Service control policy (SCP)

40. Which statement best describes the principle of least privilege?

- [ ] Adding an IAM user into at least one IAM group
- [ ] Checking a packet’s permissions against an access control list
- [x] Granting only the permissions that are needed to perform specific tasks
- [ ] Performing a denial of service attack that originates from at least one device

41. Which service helps protect your applications against distributed denial-of-service (DDoS) attacks?

- [ ] Amazon GuardDuty
- [ ] Amazon Inspector
- [ ] AWS Artifact
- [x] AWS Shield

42. Which task can AWS Key Management Service (AWS KMS) perform?

- [ ] Configure multi-factor authentication (MFA).
- [ ] Update the AWS account root user password.
- [x] Create cryptographic keys.
- [ ] Assign permissions to users and groups.

#### Module 7: Monitoring and analytics

43. Which tasks can you perform using AWS CloudTrail? (Select TWO.)

- [ ] Monitor your AWS infrastructure and resources in real time
- [x] Track user activities and API requests throughout your AWS infrastructure
- [ ] View metrics and graphs to monitor the performance of resources
- [x] Filter logs to assist with operational analysis and troubleshooting
- [ ] Configure automatic actions and alerts in response to metrics

44. Which actions can you perform using Amazon CloudWatch? (Select TWO.)

- [x] Monitor your resources’ utilization and performance
- [ ] Receive real-time guidance for improving your AWS environment
- [ ] Compare your infrastructure to AWS best practices in five categories
- [x] Access metrics from a single dashboard
- [ ] Automatically detect unusual account activity

45. Which service enables you to review the security of your Amazon S3 buckets by checking for open access permissions?

- [ ] Amazon CloudWatch
- [ ] AWS CloudTrail
- [x] AWS Trusted Advisor
- [ ] Amazon GuardDuty

46. Which categories are included in the AWS Trusted Advisor dashboard? (Select TWO.)

- [ ] Reliability
- [x] Performance
- [ ] Scalability
- [ ] Elasticity
- [x] Fault tolerance

#### Module 8: Pricing and support

47. The AWS Free Tier includes offers that are available to new AWS customers for a certain period of time following their AWS sign-up date. What is the duration of this period?

- [ ] 3 months
- [ ] 6 months
- [ ] 9 months
- [x] 12 months

48. Which Support plan includes all AWS Trusted Advisor checks at the lowest cost?

- [ ] Basic
- [ ] Developer
- [x] Business
- [ ] Enterprise

49. Which action can you perform with consolidated billing?

- [ ] Review how much cost your predicted AWS usage will incur by the end of the month.
- [ ] Create an estimate for the cost of your use cases on AWS.
- [x] Combine usage across accounts to receive volume pricing discounts.
- [ ] Visualize and manage your AWS costs and usage over time.

50. Which pricing tool is used to visualize, understand, and manage your AWS costs and usage over time?

- [ ] AWS Pricing Calculator
- [ ] AWS Budgets
- [x] AWS Cost Explorer
- [ ] AWS Free Tier

51. Which pricing tool enables you to receive alerts when your service usage exceeds a threshold that you have defined?

- [ ] Billing dashboard in the AWS Management Console
- [x] AWS Budgets
- [ ] AWS Free Tier
- [ ] AWS Cost Explorer

52. Your company wants to receive support from an AWS Technical Account Manager (TAM). Which support plan should you choose?

- [ ] Developer
- [x] Enterprise
- [ ] Basic
- [ ] Business

52. Which service or resource is used to find third-party software that runs on AWS?

- [x] AWS Marketplace
- [ ] AWS Free Tier
- [ ] AWS Support
- [ ] Billing dashboard in the AWS Management Console

#### Module 9: Migration and innovation

53.

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
