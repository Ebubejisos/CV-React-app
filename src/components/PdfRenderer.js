import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "#0ea5e9",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    color: "#fff",
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  title: {
    fontSize: 16,
    marginTop: 4,
  },

  content: {
    flexDirection: "row",
  },

  sidebar: {
    width: "40%",
    backgroundColor: "#e5e7eb",
    padding: 15,
  },

  mainContent: {
    width: "60%",
    backgroundColor: "#f3f4f6",
    padding: 15,
  },

  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  profileImage: {
    width: 120,
    height: 150,
  },

  section: {
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e3a8a",
    borderBottomWidth: 1,
    borderBottomColor: "#a1a1aa",
    paddingBottom: 4,
    marginBottom: 8,
  },

  detailBlock: {
    marginBottom: 10,
  },

  detailLabel: {
    fontWeight: "bold",
    fontSize: 10,
  },

  detailValue: {
    fontSize: 10,
    marginTop: 2,
  },

  itemRow: {
    flexDirection: "row",
    marginBottom: 10,
  },

  year: {
    width: 70,
    fontWeight: "bold",
  },

  itemContent: {
    flex: 1,
  },

  company: {
    fontWeight: "bold",
  },

  smallText: {
    fontSize: 10,
    marginTop: 2,
  },
});

const ResumePDF = ({ cvData, emptyUser }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>
          {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
        </Text>

        <Text style={styles.title}>{cvData.personalInfo.title}</Text>
      </View>

      <View style={styles.content}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              src={cvData.personalInfo.image || emptyUser}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Details</Text>

            <View style={styles.detailBlock}>
              <Text style={styles.detailLabel}>Address</Text>
              <Text style={styles.detailValue}>
                {cvData.personalInfo.address}
              </Text>
            </View>

            <View style={styles.detailBlock}>
              <Text style={styles.detailLabel}>Phone Number</Text>
              <Text style={styles.detailValue}>
                {cvData.personalInfo.number}
              </Text>
            </View>

            <View style={styles.detailBlock}>
              <Text style={styles.detailLabel}>Email</Text>
              <Text style={styles.detailValue}>
                {cvData.personalInfo.email}
              </Text>
            </View>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>

            <Text>{cvData.personalInfo.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>

            {cvData.experience.map((exp) => (
              <View key={exp.id} style={styles.itemRow}>
                <Text style={styles.year}>
                  {exp.from} - {exp.to}
                </Text>

                <View style={styles.itemContent}>
                  <Text style={styles.company}>{exp.company}</Text>

                  <Text style={styles.smallText}>Position: {exp.position}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>

            {cvData.education.map((edu) => (
              <View key={edu.id} style={styles.itemRow}>
                <Text style={styles.year}>
                  {edu.from} - {edu.to}
                </Text>

                <View style={styles.itemContent}>
                  <Text style={styles.company}>{edu.university}</Text>

                  <Text style={styles.smallText}>Degree: {edu.degree}</Text>

                  <Text style={styles.smallText}>Subject: {edu.subject}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

const PdfRenderer = ({ cvData, emptyUser }) => {
  const fileName = `${cvData.personalInfo.firstName}_${cvData.personalInfo.lastName}_CV.pdf`;

  return (
    <div style={{ marginTop: "20px" }}>
      <PDFDownloadLink
        document={<ResumePDF cvData={cvData} emptyUser={emptyUser} />}
        fileName={fileName}
      >
        {({ loading, error }) =>
          loading ? (
            <button disabled>Generating PDF...</button>
          ) : error ? (
            <button disabled style={{ backgroundColor: "#dc3545" }}>
              Error generating PDF
            </button>
          ) : (
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              📥 Download PDF
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PdfRenderer;
