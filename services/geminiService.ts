import { DocumentType } from "../types";

export const generateTemplateDraft = (
  docType: DocumentType,
  formData: Record<string, string>,
  region: string
): string => {
  const date = new Date().toLocaleDateString();
  let content = `# ${docType}\n\n`;
  content += `**Date:** ${date}\n`;
  content += `**Jurisdiction:** ${region}\n\n`;
  content += `**Status:** DRAFT (Not Legal Advice)\n\n`;
  content += `---\n\n`;

  // Specific basic templates based on type
  if (docType === DocumentType.SALE_DEED) {
      content += `THIS DEED OF SALE is made at ${region} on this ${date}\n\n`;
      content += `**BETWEEN**\n\n`;
      content += `**${formData.sellerName || "[SELLER NAME]"}**, hereinafter called the "VENDOR".\n\n`;
      content += `**AND**\n\n`;
      content += `**${formData.buyerName || "[BUYER NAME]"}**, hereinafter called the "PURCHASER".\n\n`;
      content += `**WHEREAS** the Vendor is the absolute owner of the property described below:\n`;
      content += `> ${formData.propertyAddress || "[PROPERTY ADDRESS]"}\n\n`;
      content += `**NOW THIS DEED WITNESSETH** that in consideration of the sum of **${formData.saleConsideration || "[AMOUNT]"}** paid by the Purchaser to the Vendor (Mode: ${formData.paymentMode || "Cash/Cheque"})...\n\n`;
  } else if (docType === DocumentType.GIFT_DEED) {
      content += `THIS DEED OF GIFT is made at ${region} on this ${date}\n\n`;
      content += `**BETWEEN**\n\n`;
      content += `**${formData.donorName || "[DONOR NAME]"}**, hereinafter called the "DONOR".\n\n`;
      content += `**AND**\n\n`;
      content += `**${formData.doneeName || "[DONEE NAME]"}**, hereinafter called the "DONEE".\n\n`;
      content += `**RELATIONSHIP:** The Donee is the ${formData.relationship || "[RELATIONSHIP]"} of the Donor.\n\n`;
      content += `**WHEREAS** the Donor desires to gift the property described below to the Donee out of natural love and affection:\n`;
      content += `> ${formData.propertyDetails || "[PROPERTY DETAILS]"}\n\n`;
  } else {
      // Generic Fallback for other types
      content += `## Document Details\n\n`;
      Object.entries(formData).forEach(([key, value]) => {
         const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
         content += `**${label}:** ${value}\n\n`;
      });
  }

  content += `\n---\n\n`;
  content += `### Next Steps\n\n`;
  content += `1. **Verification:** Please visit our office to verify these details.\n`;
  content += `2. **Stamp Paper:** Purchase the required Non-Judicial Stamp Paper.\n`;
  content += `3. **Final Print:** We will print the final legal version on the stamp paper.\n\n`;
  
  content += `**Disclaimer:** This is a computer-generated draft for preview purposes only. It is NOT a final legal document.\n\n`;

  content += `**Office Address:**\nKulkarni Plot, VAKIL GALLI, behind CIVIL COURT, New Satara, Juna Satara, Bhusawal, Maharashtra 425201\n`;

  return content;
};
